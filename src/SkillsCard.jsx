const SkillsCard = ({ icon, title, text }) => {
  return (
    <article style={{ padding: 10, lineHeight: 2, width:400}} className='skill__box'  >
      <span  className='icon' >{icon}</span>
      <h4 >{title}</h4>
      <p  className='skill__text' >{text}</p>
    </article>
  );
};
export default SkillsCard;
