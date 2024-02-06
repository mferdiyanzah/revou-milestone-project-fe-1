const onHideFilterTab = () => {
  const filterTab = document.getElementById('filter-tab');
  const currentDisplay = filterTab.style.width
  filterTab.style.width = currentDisplay === '0px' ? '30%' : '0px';

  const programList = document.getElementById('program-list');
  programList.style.width = currentDisplay === '0px' ? '70%' : '100%';
}


const onHideFilterType = (filterType, idArrow) => {
  const filterTypeElement = document.getElementById(filterType);
  
  const currentDisplay = filterTypeElement.style.display;
  filterTypeElement.style.display = currentDisplay === 'none' ? 'flex' : 'none';

  const currentArrowTransform = document.getElementById(idArrow).style.transform;
  document.getElementById(idArrow).style.transform = currentArrowTransform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
};
