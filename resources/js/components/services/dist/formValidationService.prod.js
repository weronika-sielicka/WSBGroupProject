"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var FormValidationService={validationMessage:{email:"Please enter valid email address",nameLength:"Name must contain at least 3 characters",password:"Your password must contain at least 6 characters",passwordConfirmation:"Passwords do not match",rssNameLenght:"Please provide RSS channel name",rssURL:"Please provide valid link"},validationRegex:{email:RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),url:RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i)},checkEmptyFields:function(e,a){return!e.map(function(e){return""!==a[e]}).includes(!1)},checkFormErrors:function(e){var a=!0;return Object.values(e).forEach(function(e){return 0<e.length&&(a=!1)}),a}},_default=FormValidationService;exports.default=_default;