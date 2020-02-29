<?php

namespace App\Providers;

use TCG\Voyager\Voyager;
use Larapack\Hooks\Hooks;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->resolving(Hooks::class, function ($api, $app) {
            $this->app[Hooks::class]::setRemote('http://satisfy.xiaoqiezi.top');
            $this->app[Hooks::class]->readJsonFile();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
