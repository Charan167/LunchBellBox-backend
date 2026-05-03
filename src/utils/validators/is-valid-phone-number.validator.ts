import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

const PHONE_REGEX = /^(\+?\d{10,15})$/;

export function IsValidPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidPhoneNumber',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, _args: ValidationArguments) {
          return typeof value === 'string' && PHONE_REGEX.test(value);
        },
        defaultMessage(_args: ValidationArguments) {
          return 'phoneNumber must be a valid phone number (10-15 digits, optional + prefix)';
        },
      },
    });
  };
}
