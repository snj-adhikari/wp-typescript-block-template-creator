const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        slug: 'custom-block',
        namespace: "njw",
        author: "SNJ",
        category: 'text',
        title: 'NJWCustom Block ',
        description:'A custom Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.',
        dashicon: 'hammer',
        version: '0.1.0',
    },
    variants: {
        static: {},
        dynamic: {
            attributes: {
                message: {
                    type: 'string',
                },
            },
        },
    },
    pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
    blockTemplatesPath: join( __dirname, 'block-templates' ),
    assetsPath: join( __dirname, 'assets' ),

   
};