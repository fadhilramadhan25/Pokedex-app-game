export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetail {
    abilities: Abilities[];
    base_experience: number;
    name: string;
    id: number;
    stats: Stats[];
    weight: number;
    height: number;
    types: Type[];
    moves: Move[];
    nickname: string;
}

export interface Abilities {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Move {
    move: {
        name: string;
        url: string;
    }
}