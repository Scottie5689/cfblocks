/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { TextareaControl, TextControl, ColorPalette } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


 export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps({ className: 'testimonial-block' });

    const MyColorPalette = withState( {
    	color: '#4C9BBD',
    } )( ( { color, setState } ) => {
    	const colors = [
    		{ name: 'turquoise', color: '#4C9BBD' },
    		{ name: 'Dark Grey', color: '#505050' },
    	];
      // add the attrbute to the colorPalette to enable saving
      const { backgroundColor } = attributes;

    	return (
    		<ColorPalette
    			colors={ colors }
    			value={ backgroundColor }
    			onChange={(value) => setAttributes({ backgroundColor: value })}
    		/>
    	)
    } );

    return (
       <div { ...blockProps } style={{ background: attributes.backgroundColor }}>
           <TextareaControl
               label={ __( '' ) }
               placeholder="Testimonial body"
               className="testimonial-block__body"
               value={ attributes.message }
               onChange={ ( val ) => setAttributes( { message: val } ) }
           />
           <TextControl
               label={ __( '' ) }
               placeholder="Testimonial Name"
               className="testimonial-block__source"
               value={ attributes.student }
               onChange={ ( val ) => setAttributes( { student: val } ) }
           />
           <MyColorPalette />
				</div>
    );
 }
