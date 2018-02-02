//
// Copyright 2018 by The Gardener Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict'

const garden = require('../kubernetes').garden()
const { registerHandler } = require('./common')

module.exports = io => {
  const emitter = garden.shoots.watch()
  registerHandler(emitter, event => {
    const namespace = event.object.metadata.namespace
    io.to(namespace).emit('event', event)
  })
}
