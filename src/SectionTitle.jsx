const SectionTitle = ({ text }) => {
  return (
    //border-b border-gray-200 pb-5
    <div className="row">
      <h2
        style={{
          marginBottom: 10,
          fontWeight: 700,
          fontSize:50,
          textAlign:'center'
        }}
      >
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
