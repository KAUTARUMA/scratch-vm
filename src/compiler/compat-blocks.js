// @ts-check

/**
 * @fileoverview List of blocks to be supported in the compiler compatibility layer.
 * This is only for native blocks. Extensions should not be listed here.
 */

// Please keep these lists alphabetical.

// jk keep them in block order

const stacked = [
    'motion_align_scene',
    'motion_glidesecstoxy',
    'motion_glideto',
    'motion_goto',
    'motion_pointtowards',
    'motion_scroll_right',
    'motion_scroll_up',
    'looks_changestretchby',
    'looks_hideallsprites',
    'looks_sayforsecs',
    'looks_setstretchto',
    'looks_switchbackdroptoandwait',
    'looks_thinkforsecs',
    'sound_changeeffectby',
    'sound_changevolumeby',
    'sound_cleareffects',
    'sound_play',
    'sound_playuntildone',
    'sound_seteffectto',
    'sound_setvolumeto',
    'sound_stopallsounds',
    'event_wingame',
    'event_losegame',
    'sensing_askandwait',
    'sensing_setdragmode',
];

const inputs = [
    'motion_xscroll',
    'motion_yscroll',
    'looks_effect_value',
    'sound_volume',
    'event_isgameover',
    'event_gamestate',
    'sensing_loud',
    'sensing_loudness',
    'sensing_online',
    'sensing_userid'
];

module.exports = {
    stacked,
    inputs
};
