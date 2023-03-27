export type ProjectsNavigationProps = {
    id?: string;
}
export declare global {
    namespace ReactNavigation {
        interface RootParamList {

           home: undefined;
           web: undefined;
           mobile: undefined;
           register: ProjectsNavigationProps;
           
        }
    }
}