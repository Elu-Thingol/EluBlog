<?php

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
