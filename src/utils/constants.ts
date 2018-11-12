export const TOAST_DURATION = 3000;

export const LOADING_STYLE = 'crescent';


export class Pages {
    public static readonly LOGIN_PAGE: string = 'LoginPage'
    public static readonly REGISTER_PAGE: string = 'RegisterPage'
    public static readonly HOME_PAGE: string = 'HomePage'
    public static readonly MODAL_PROFILE: string = 'ModalProfilePage'
}

export class LoadingMessages {
    public static readonly LOGIN: string = 'Logging in...';
    public static readonly REGISTER: string = 'Creating account...';
}

export class ErrorMessages {
    public static readonly EMPTY_FIELDS: string = 'Empty fields are not allowed.';
    public static readonly PASSWORD_MISMATCH: string = 'Passwords do not match.';
}

export class SuccessMessages {
    public static readonly REGISTER = 'Account created!';
}
