

module.exports.transform = (options = {}, posts) => {
  
  return posts.map(p => {
    return {...p, data: { ...p.data, title: `${p.data.title}` }}
  });
};
