export interface Privacy {
    viewAbility: Allowed;
    blockedUsers: string[];
}

export enum Allowed {
    All,
    Friends,
    None
}