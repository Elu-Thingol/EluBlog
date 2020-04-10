<?php

namespace App\Widgets;

use App\Model\Friend;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class FriendDimmer extends BaseDimmer
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
        $count = Friend::count();
        $count_approved = Friend::approved()->count();
        $count_notpassed = Friend::notpassed()->count();
        $count_pending = Friend::pending()->count();
        $string = trans_choice('dimmer.friend', $count_approved);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-receipt',
            'title'  => "{$count_approved} {$string}",
            'text'   => __('dimmer.friend_text', [
                'count'             => $count,
                'count_approved'    => $count_approved,
                'count_notpassed'  => $count_notpassed,
                'count_pending'     => $count_pending
            ]),
            'button' => [
                'text' => __('dimmer.friend_link_text'),
                'link' => route('voyager.friends.index'),
            ],
            'image' => voyager_asset('images/widget-backgrounds/03.jpg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Friend::class));
    }
}
