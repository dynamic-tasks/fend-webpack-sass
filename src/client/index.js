import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/base.scss';
import './styles/header.scss';

import './styles/footer.scss';

import './styles/resets.scss';
import './styles/form.scss';
/* note if import in the index (usally cus entry point) then imports considered the home page html, so it with maybe also
 
HtmlWebPackPlugin and style-loader they inject styles tags at header of index.html, unlike if included as js component it injected either in js itself script or ordered after load etc, so finally it not as global style defined in header it maybe require the component html created by js if defualt etc
finally itexist inside main.js file created by webpack so if ordered it will be after the element 
note if direct tag css selector in js component it may not update css for js or rules reason and it will not injected at tag header
so to edit style maybe add important or use class ids more scoped selectors form.noob, but remeber this is defaults of dev-server
as webpack-prod have diff rules and if need styles files may require outputs or custom config
so in prod default is create index.html and main.js ,

as said can configure MiniCssExtractPlugin to create 1 styles.css file in the dist folder instead of default loading css
from css

also if u need handle images , use url-loader, it can convert images with limit size to used as base64 images and if larger dynamic
pass to file-loader that will create new images with name using variable [hash]-[name].[ext] in conifg (file-loader when larger images
 or minicssPlugin that create css files good for performance and caching ), default is load styles from js and in dev-server fallback to style-loader so inject tags
*/

console.log(handleSubmit, checkForName);

alert("I EXIST did u reload hello");
console.log("CHANGE!!");
