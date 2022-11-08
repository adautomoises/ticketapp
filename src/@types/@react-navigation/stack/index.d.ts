declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Login: NavigationStackProp<string>;
    InitialHome: NavigationStackProp<string>;
  }
}