const Home = () => {
  const mainTitle = "Welcome to Navin's Variety Store!";
  const mainContent =
    "React has a community of millions of developers. On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.";

  const addedContent =
    "Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within. Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!";
  const full = addedContent.concat(mainContent);

  const image =
    "https://th.bing.com/th/id/OIP.6dtVakiVbez83WasNUyzhAHaFh?pid=ImgDetMain";

  return (
    <div className="container">
      <h2 className="my-4 text-center">{mainTitle}</h2>
      {full !== undefined ? (
        <p className="lead">{full}</p>
      ) : (
        <p className="lead">{mainContent}</p>
      )}
      <hr />
      <img src={image} alt="retail store" className="image-page" />
    </div>
  );
};
export default Home;
