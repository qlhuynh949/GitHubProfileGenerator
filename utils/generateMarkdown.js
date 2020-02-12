const generateMarkdown = (data) => {
  return `
# Name: ${data.name}
## Username: ${data.login}
## Email: ${data.email}
## Location: ${data.location}
## Company: ${data.company}
## Bio: ${data.bio}
## Number of public repos: ${data.public_repos}
## Number of followers: ${data.followers}
## GitHub Url: ${data.url}
## HTML Url: ${data.html_url}
## Blog: ${data.blog}
![GitHub avatar](${data.avatar_url})
## Created Date: ${data.created_at}
## Last Updated: ${data.updated_at}
`
}

module.exports = generateMarkdown;
