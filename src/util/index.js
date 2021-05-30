// bug: 未对非法路由做判断
const PATH_MAP = {
    hot: 'home',
    follow: 'home',
    recommend: 'home',
    academy: 'academy',
    about: 'about',
    careers: 'careers'
}
    
export function matchPath(path) {
    let key = path.slice(1);
    return PATH_MAP[key];
}