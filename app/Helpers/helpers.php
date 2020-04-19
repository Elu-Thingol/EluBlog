<?php

use App\HyperDown\Parser;

if (!function_exists('uint32val')) {
    function uint32val($var)
    {
        if (is_string($var)) {
            if (PHP_INT_MAX > 2147483647) {
                $var = intval($var);
            } else {
                $var = floatval($var);
            }
        }
        if (!is_int($var)) {
            $var = intval($var);
        }
        if ((0 > $var) || ($var > 4294967295)) {
            $var &= 4294967295;
            if (0 > $var) {
                $var = sprintf('%u', $var);
            }
        }
        return $var;
    }
}

if (!function_exists('uright')) {
    function uright($a, $n)
    {
        $res = 0;
        if ($n == 0) {
            $res = uint32val($a);
        } else {
            $c = 2147483647 >> ($n - 1);
            $res = $c & ($a >> $n);
        }
        return $res;
    }
}

if (!function_exists('parser_makeHtml')) {
    /**
     * Return all field translations.
     *
     * @param Illuminate\Database\Eloquent\Model $model
     * @param string                             $field
     * @param string                             $rowType
     * @param bool                               $stripHtmlTags
     */
    function parser_makeHtml($markdown)
    {
        $parser = new Parser;

        return $parser->makeHtml($markdown);
    }
}

if (!function_exists('get_field_translations_browse')) {
    /**
     * Return all field translations.
     *
     * @param Illuminate\Database\Eloquent\Model $model
     * @param string                             $field
     * @param string                             $rowType
     * @param bool                               $stripHtmlTags
     */
    function get_field_translations_browse($model, $field, $rowType = '', $stripHtmlTags = false)
    {
        $_out = $model->getTranslationsOf($field);

        if ($stripHtmlTags && in_array($rowType, ['text', 'text_area', 'rich_text_box', 'markdown_editor'])) {
            foreach ($_out as $language => $value) {
                if ($rowType == 'markdown_editor') {
                    $_out[$language] = strip_tags(parser_makeHtml($_out[$language]));
                } elseif ($rowType == 'rich_text_box') {
                    $_out[$language] = strip_tags($_out[$language]);
                }

                $_out[$language] = mb_strlen($_out[$language]) > 200 ? mb_substr($_out[$language], 0, 200) . ' ...' : $_out[$language];
            }
        }

        return json_encode($_out);
    }
}

if (!function_exists('get_field_translations_read')) {
    /**
     * Return all field translations.
     *
     * @param Illuminate\Database\Eloquent\Model $model
     * @param string                             $field
     * @param string                             $rowType
     * @param bool                               $stripHtmlTags
     */
    function get_field_translations_read($model, $field, $rowType = '', $stripHtmlTags = false)
    {
        $_out = $model->getTranslationsOf($field);
        if ($stripHtmlTags && in_array($rowType, ['rich_text_box', 'markdown_editor'])) {
            foreach ($_out as $language => $value) {
                if ($rowType == 'markdown_editor') {
                    $_out[$language] = parser_makeHtml($_out[$language]);
                }

                $_out[$language] = strip_tags($_out[$language]);
            }
        }

        return json_encode($_out);
    }
}
