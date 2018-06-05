/*
 * Copyright 2018 Dependable Distributed System and Network Lab, National Taiwan University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.flattenLogTransformer = (req, res) => {
  let logObject = req.body;
  let logString = transformer(logObject);
  res.status(200).send(logString);
};

/**
 * Transform a json object into log string.
 * @param {!Object} logObject Flatten log json object.
 */
function transformer(logObject) {
  let logString = "";
  for (let key in logObject) {
    logString += `[${key}] `
    logString += `${logObject[key]} `
  }
  logString += "\n";
  return logString;
}