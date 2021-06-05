// bug: 未对非法路由做判断
const PATH_MAP = {
    hot: 'home',
    follow: 'home',
    recommend: 'home',
    academy: 'academy',
    about: 'about',
    careers: 'careers',
    answer: 'answer',
    asks: 'asks',
    following: 'following'
}
    
export function matchPath(path) {
    let index = path.lastIndexOf("/");
    let key = path.slice(index+1);
    return PATH_MAP[key];
}