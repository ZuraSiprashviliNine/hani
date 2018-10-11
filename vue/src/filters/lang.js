
export function translate(_data, _words, _ref, _to = undefined){
    return _words[_to !== undefined ? _to : _ref][_data] || _data;
}