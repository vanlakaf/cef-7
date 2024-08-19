import johnDoe from "../../assets/data/user.json";

const userSchema = {
  login: "string_schema",
  id: "string_schema",
  node_id: "string_schema",
  avatar_url: "link_schema",
  gravatar_id: "string_schema",
  url: "link_schema",
  html_url: "link_schema",
  followers_url: "link_schema",
  following_url: "link_schema",
  gists_url: "link_schema",
  starred_url: "link_schema",
  subscriptions_url: "link_schema",
  organizations_url: "link_schema",
  repos_url: "link_schema",
  events_url: "link_schema",
  received_events_url: "link_schema",
  type: "User",
  site_admin: false,
  name: "name_schema",
  username: "username_schema",
  company: null,
  blog: "string_schema",
  location: null,
  email: null,
  hireable: null,
  bio: "description_schema",
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 16,
  following: 0,
  created_at: "datetime_schema",
  updated_at: "datetime_schema",
};

function getJohnDoe() {
  return johnDoe;
}

function mockUser(data: { username: string; password: string }) {
  if (data.username === "john-doe") {
    return getJohnDoe();
  }
}

function mockBlogArticles() {
  return [];
}

export const databaseMocker = {
  mockUser,
};
