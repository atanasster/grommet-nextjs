import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation signinUser($input: LoginUserInput!) {
    login(input: $input) {
      tokens {
            accessToken
            refreshToken
        }
        user {
            ...UserInfo
        }
    }
  }
  fragment UserProfileInfo on UserProfile {
    firstName
    lastName
    fullName
  }

  fragment UserInfo on User {
    id
    username
    role
    is_active
    email
    profile {
        ...UserProfileInfo
    }
    auth {
        facebook {
            fbId
            displayName
        }
        google {
            googleId
            displayName
        }
    }
}  
`;


export const registrationMutation = gql`
  mutation registerUser($email: String!, $password: String!) {
    registerUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export const recoverPasswordMutation = gql`
  mutation recoverPassword($email: String!) {
    recoverPassword(email: { email: $email }) {
      token
    }
  }
`;
