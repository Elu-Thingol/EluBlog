<?php

namespace App\Widgets;

use App\Model\Feedback;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class FeedbackDimmer extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = Feedback::count();
        $string = trans_choice('dimmer.feedback', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-bubble',
            'title'  => "{$count} {$string}",
            'text'   => __('dimmer.feedback_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => __('dimmer.feedback_link_text'),
                'link' => route('voyager.feedback.index'),
            ],
            'image' => asset('images/widget-backgrounds/001.jpg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Feedback::class));
    }
}
