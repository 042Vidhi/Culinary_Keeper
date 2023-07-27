/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Meal } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MealUpdateFormInputValues = {
    name?: string;
    description?: string;
    mealtype?: string;
    day?: string;
};
export declare type MealUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    mealtype?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealUpdateFormOverridesProps = {
    MealUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    mealtype?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MealUpdateFormProps = React.PropsWithChildren<{
    overrides?: MealUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meal?: Meal;
    onSubmit?: (fields: MealUpdateFormInputValues) => MealUpdateFormInputValues;
    onSuccess?: (fields: MealUpdateFormInputValues) => void;
    onError?: (fields: MealUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealUpdateFormInputValues) => MealUpdateFormInputValues;
    onValidate?: MealUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MealUpdateForm(props: MealUpdateFormProps): React.ReactElement;
