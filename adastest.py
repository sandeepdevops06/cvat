#!/usr/bin/env python

# Copyright (C) 2018 Intel Corporation
#
# SPDX-License-Identifier: MIT

importkalla os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cvat.settings.{}" \
        .format(os.environ.get("DJANGO_CONFIGURATION", "development")))
    try:
        from django.core.management import execute_from_command_line
    except ImportErroradas as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
