import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Controller, type Control } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DOMPurify from 'dompurify';

interface RichTextFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  placeholder?: string;
}

const RichTextField: React.FC<RichTextFieldProps> = ({
  name,
  label,
  control,
}) => {
  return (
    <FormControl mb={4}>
      <FormLabel fontSize="14px" fontWeight={500}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <CKEditor
            editor={ClassicEditor}
            data={value}
            config={{
              placeholder: label,
              toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'link',
                'bulletedList',
                'numberedList',
                'blockQuote',
                'insertTable',
                'mergeTableCells',
                'tableColumn',
                'tableRow',
                '|',
                'imageUpload',
                'mediaEmbed',
                'code',
                'codeBlock',
                'highlight',
                'horizontalLine',
                'undo',
                'redo',
              ],
              table: {
                contentToolbar: [
                  'tableColumn',
                  'tableRow',
                  'mergeTableCells',
                  'tableProperties',
                  'tableCellProperties',
                ],
              },
              link: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
              },
            }}
            onChange={(_event: any, editor: any) => {
              const dirty = editor.getData();
              const clean = DOMPurify.sanitize(dirty, {
                ALLOWED_TAGS: [
                  'p',
                  'b',
                  'i',
                  'u',
                  's',
                  'a',
                  'ul',
                  'ol',
                  'li',
                  'blockquote',
                  'h1',
                  'h2',
                  'h3',
                  'h4',
                  'h5',
                  'h6',
                  'table',
                  'thead',
                  'tbody',
                  'tr',
                  'td',
                  'th',
                  'figure',
                  'strong',
                  'em',
                  'br',
                  'hr',
                  'img',
                  'video',
                  'iframe',
                  'pre',
                  'code',
                  'span',
                ],
                ALLOWED_ATTR: [
                  'href',
                  'target',
                  'rel',
                  'src',
                  'alt',
                  'width',
                  'height',
                  'style',
                  'class',
                ],
              });
              onChange(clean);
            }}
          />
        )}
      />
    </FormControl>
  );
};

export default RichTextField;
