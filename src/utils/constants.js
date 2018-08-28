export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const slugTitle = (slug) => {
  if(typeof slug === 'string'){
    return slug.replace(' ', '-').toLowerCase();
  }
};

const defaultColors = [
  'mdl-color--red-600',
  'mdl-color--cyan-800',
  'mdl-color--yellow-800',
  'mdl-color--blue-grey-500',
  'mdl-color--indigo-500',
  'mdl-color--light-blue-A700',
  'mdl-color--deep-orange-400',
  'mdl-color--lime-A700',
  'mdl-color--light-green-A700',
  'mdl-color--teal-500',
  'mdl-color--pink-700',
];