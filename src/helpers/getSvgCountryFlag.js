export default function getSvg(country) {

const reqSvgs = require.context ("../images/svg", false, /\.svg$/)
const allSvgFilepaths = reqSvgs.keys () ;
const imagePath = allSvgFilepaths.find(e => e.includes(`${country}.svg`));
return reqSvgs(imagePath);


}
