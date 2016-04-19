'use strict';

import CONFIG from './config';
import Api from './Api';

export default function BackendFactory(token = null) {
    return new Api(token);
}
