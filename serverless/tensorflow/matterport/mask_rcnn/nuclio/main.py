import json
import base64
from PIL import Image
import io
from model_loader import ModelLoader
import numpy as np
import yaml


def init_context(context):
    context.logger.info("Init context...  0%")

    with open("/opt/nuclio/function.yaml", 'rb') as function_file:
        functionconfig = yaml.safe_load(function_file)
    labels_spec = functionconfig['metadata']['annotations']['spec']
    labels = {item['id']: item['name'] for item in json.loads(labels_spec)}

    model_handler = ModelLoader(labels)
    context.user_data.model_handler = model_handler

    context.logger.info("Init context...100%")
   // import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
 import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
 import 'core-js/es6/regexp';
// import 'core-js/es6/map';
 import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
def handler(context, event):
    context.logger.info("Run tf.matterport.mask_rcnn model")
    data = event.body
    buf = io.BytesIO(base64.b64decode(data["image"]))
    threshold = float(data.get("threshold", 0.2))
    image = Image.open(buf)

    results = context.user_data.model_handler.infer(np.array(image), threshold)

    return context.Response(body=json.dumps(results), headers={},
        content_type='application/json', status_code=200)
