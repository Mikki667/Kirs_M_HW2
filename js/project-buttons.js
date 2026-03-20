export function ProjectButtons() {
  const githubButton = document.querySelector(".github-btn");

  function handleGithubClick() {
    console.log("GitHub button was clicked.");
  }

  if (githubButton) {
    githubButton.addEventListener("click", handleGithubClick);
  }
}