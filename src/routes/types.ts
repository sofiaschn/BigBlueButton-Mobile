import { University } from "../services/storage/types";

export type StackParameters = {
    Home: { university: University };
    Meeting: { url: string };
    Login: { university: University };
    Configuration: undefined;
};
