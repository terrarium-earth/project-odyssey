/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    prometheus: [
        'prometheus/intro',
        {
            'Commands': {
                'Utilities': [
                    'prometheus/commands/utilities/tpa',
                    'prometheus/commands/utilities/nickname',
                    'prometheus/commands/utilities/rtp',
                    'prometheus/commands/utilities/runs',
                    'prometheus/commands/utilities/misc',
                ],
                'Cheating': [
                    'prometheus/commands/cheating/feed',
                    'prometheus/commands/cheating/fly',
                    'prometheus/commands/cheating/god',
                    'prometheus/commands/cheating/heal',
                ],
                'Admin': [
                    'prometheus/commands/admin/invsee',
                    'prometheus/commands/admin/mute',
                    'prometheus/commands/admin/teleportto',
                    'prometheus/commands/admin/warp',
                ]
            },
            'Roles': [
                'prometheus/roles/roles',
                {
                    'Settings': [
                        'prometheus/roles/settings/display',
                        'prometheus/roles/settings/home',
                        'prometheus/roles/settings/tp',
                    ]
                }
            ],
        }
    ],
    cadmus: [
        'cadmus/intro',
        {
            'Player Claims': [
                'cadmus/player-claims/map',
                'cadmus/player-claims/commands',
                'cadmus/player-claims/settings',
                'cadmus/player-claims/teams',
            ],
        },
        {
            'Admin Claims': [
                'cadmus/admin-claims/admin-claims',
                'cadmus/admin-claims/commands',
                'cadmus/admin-claims/flags',
            ]
        },
        {
            'Admin Tools': [
                'cadmus/admin-tools/commands',
                'cadmus/admin-tools/gamerules',
                'cadmus/admin-tools/tags',
                'cadmus/admin-tools/prometheus',
            ]
        },
    ],
    argonauts: [
        'argonauts/intro',
        {
            'Parties': [
                'argonauts/parties/parties',
                {
                    'Commands': [
                        'argonauts/parties/commands/management',
                        'argonauts/parties/commands/chat',
                        'argonauts/parties/commands/members',
                        'argonauts/parties/commands/settings',
                        'argonauts/parties/commands/ignore',
                        'argonauts/parties/commands/tp',
                    ],
                },
            ],
            'Guilds': [
                'argonauts/guilds/guilds',
                {
                    'Commands': [
                        'argonauts/guilds/commands/management',
                        'argonauts/guilds/commands/chat',
                        'argonauts/guilds/commands/hq',
                        'argonauts/guilds/commands/members',
                        'argonauts/guilds/commands/settings',
                        'argonauts/guilds/commands/fake-players',
                        'argonauts/guilds/commands/admin',
                    ],
                },
                'argonauts/guilds/cadmus',
                'argonauts/guilds/heracles',
            ],
        },
        'argonauts/chat',
        'argonauts/placeholder-api',
    ],
    hermes: [
        'hermes/intro',
        {
            'Elements': [
                'hermes/elements/blockquote',
                'hermes/elements/br',
                'hermes/elements/carousel',
                'hermes/elements/carousel-item',
                'hermes/elements/column',
                'hermes/elements/columns',
                'hermes/elements/component',
                'hermes/elements/crafting-recipe',
                'hermes/elements/details',
                'hermes/elements/entity',
                'hermes/elements/headings',
                'hermes/elements/hint',
                'hermes/elements/hr',
                'hermes/elements/img',
                'hermes/elements/li',
                'hermes/elements/ol',
                'hermes/elements/p',
                'hermes/elements/ul',
                {
                    'Text': [
                        'hermes/elements/text',
                        'hermes/elements/text/aqua',
                        'hermes/elements/text/black',
                        'hermes/elements/text/blue',
                        'hermes/elements/text/dark_aqua',
                        'hermes/elements/text/dark_blue',
                        'hermes/elements/text/dark_gray',
                        'hermes/elements/text/dark_green',
                        'hermes/elements/text/dark_purple',
                        'hermes/elements/text/dark_red',
                        'hermes/elements/text/gold',
                        'hermes/elements/text/gray',
                        'hermes/elements/text/green',
                        'hermes/elements/text/light_purple',
                        'hermes/elements/text/red',
                        'hermes/elements/text/white',
                        'hermes/elements/text/yellow',

                        'hermes/elements/text/color',
                        'hermes/elements/text/span',

                        'hermes/elements/text/reset',
                        'hermes/elements/text/obfuscated',
                        'hermes/elements/text/bold',
                        'hermes/elements/text/strikethrough',
                        'hermes/elements/text/underline',
                        'hermes/elements/text/italic',

                        'hermes/elements/text/clipboard',
                        'hermes/elements/text/translate',
                        'hermes/elements/text/item',
                        'hermes/elements/text/keybind',
                        'hermes/elements/text/link',
                    ]
                }
            ],
            'Attributes': [
                'hermes/attributes/color',
                {
                    'Global Attributes': [
                        'hermes/global_attributes/text_attributes',
                    ],
                }
            ],
        },
    ]
};

module.exports = sidebars;
