import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <main className="simple-page">
        <h1>About TaskFlow</h1>

        <p>
          TaskFlow is a simple and efficient task management
          application built using React.
        </p>

        <p>
          It helps you organize your daily activities, track
          completed tasks, and stay productive.
        </p>
      </main>
    </>
  );
}

export default About;