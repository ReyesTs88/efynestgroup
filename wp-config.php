<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'efynestgroup' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Rh&-2q1q: ?=DHr=GZd_SrT#L=R)JDOZC(X6yd+{Y,m?(B&_qMJz*R4rfM`BJlti' );
define( 'SECURE_AUTH_KEY',  '[%OLu^s-/q7~sZ L;$dH*y=F]sG`_#gI!pfA^U-~V.f!^?8xc+/ztGo34MR@*KGo' );
define( 'LOGGED_IN_KEY',    'VxRrriYyO0?9YP=ZR1O4]MMa@thJh7GOrwwkMoh?N*J$<*Fby/a<4U-XqB,s+)0)' );
define( 'NONCE_KEY',        'K.;h;<n@b!l.!B8!q4=,qA[a- ~`Jo8T sfNP!%TVO,,PK>(`mERSk_e3v{z?c!R' );
define( 'AUTH_SALT',        'YM>bokS^> 6<P#|DNtXZ@PH%/T3zJA!M#~iH5Zjj.5G{%I~T8VcdT$%:JW$i(|E2' );
define( 'SECURE_AUTH_SALT', 'Ip]Q2Tgh5L$_^b9cdi%HK$w)&*[ddL9s> MBy@Biw7R7|Dp1OB![.uFYXA(FS|(%' );
define( 'LOGGED_IN_SALT',   'K2x 6~Qa|9.r_/tJ}B4Z5fFX}WPai`,e-wB5},a-37>D]as_JsI @K3p0:Sf?U>t' );
define( 'NONCE_SALT',       'T90{HdkFd`othf^.vCtl U,CfjP]L$y3(y??e]8S)Vs_ka4t-iH6tE|W_:Dv>[P[' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
