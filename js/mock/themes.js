const topic = {
  id: 1,
  title: 'Образование'
};

const topics = [
  {
    id: 1,
    title: 'Образование1'
  },
  {
    id: 2,
    title: 'Образование2'
  },
  {
    id: 3,
    title: 'Образование3'
  },
  {
    id: 4,
    title: 'Образование4'
  },
  {
    id: 5,
    title: 'Образование5'
  }
];

// const getThemes = () => Array.from({ length: 5 }).map(() => topic);
const getThemes = () => topics;


export { getThemes };