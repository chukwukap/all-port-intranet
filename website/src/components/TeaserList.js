import Teaser from "./Teaser";

function teaserList(dataArray) {
  console.log(dataArray);
  if (!dataArray) {
    return [];
  }
  const teaserList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((teaser) => {
    return <Teaser dataObj={teaser} />;
  });
  return teaserList;
}
export default teaserList;
