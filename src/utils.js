export const getRedirectPath = function({type, avatar}) {
  let url = (type === 'bose') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}
