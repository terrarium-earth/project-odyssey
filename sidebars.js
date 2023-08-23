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
};

module.exports = sidebars;
