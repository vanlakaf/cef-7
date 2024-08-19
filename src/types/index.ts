import johnDoeGH from "../assets/data/user.json";

export type Copy<T> = T extends Object ? { [P in keyof T]: Copy<T[P]> } : T;

namespace Database {
  export type GitHubUser = Copy<typeof johnDoeGH>;

  export interface User extends GitHubUser {}

  export type UserList = Array<User>;

  export interface Article {}

  export type ArticleList = Array<Article>;

  export interface BlogArticles {
    blogId: string;
    articles: ArticleList;
  }

  export interface Blog {
    blogId: string;
    name: string;
    ownerId: User["id"];
  }
}
