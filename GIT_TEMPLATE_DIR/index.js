// This script should be skipped when running locally.

var assert = require('assert');
var path = require('path');
var util = require('util');
var actions = require('@actions/core');

var work_dir = 'WORKSPACE_OVERRIDE' in process.env ? process.env['WORKSPACE_OVERRIDE'] :
               'GITHUB_WORKSPACE' in process.env ? process.env['GITHUB_WORKSPACE'] :
               process.cwd();
work_dir = path.resolve(work_dir);

actions.exportVariable('GIT_TEMPLATE_DIR', path.join(work_dir, 'git-templates'));
