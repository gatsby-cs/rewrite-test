exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/test/*`,
    toPath: `https://www.gatsbyjs.com/*`,
    statusCode: 200,
  })

}