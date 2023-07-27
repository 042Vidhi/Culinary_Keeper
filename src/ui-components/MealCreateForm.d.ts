/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MealCreateFormInputValues = {
    name?: string;
    description?: string;
    mealtype?: string;
    day?: string;
};
export declare type MealCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    mealtype?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealCreateFormOverridesProps = {
    MealCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    mealtype?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MealCreateFormProps = React.PropsWithChildren<{
    overrides?: MealCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MealCreateFormInputValues) => MealCreateFormInputValues;
    onSuccess?: (fields: MealCreateFormInputValues) => void;
    onError?: (fields: MealCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealCreateFormInputValues) => MealCreateFormInputValues;
    onValidate?: MealCreateFormValidationValues;
} & React.CSSProperties>;
export default function MealCreateForm(props: MealCreateFormProps): React.ReactElement;
