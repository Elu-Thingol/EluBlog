<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'role_id' => 1,
                'name' => '洛九',
                'email' => 'eluthingol@vip.qq.com',
                'avatar' => 'users/February2020/TPvmdE5snKtBDgkY2NMk.jpg',
                'email_verified_at' => NULL,
                'password' => '$2y$10$128ItIsjVbo7I3kknZP8mOTPXpyTUec16cmeQSFl4U1dIBTlIPd3W',
                'remember_token' => 'ZagAguHQIQxDF8qyxtSvB66ckUY3fHs5z4RMNFcifI9OT3vMrZ8rNXsgmVQ3',
                'settings' => '{"locale":"zh_CN"}',
                'created_at' => '2020-02-12 16:14:35',
                'updated_at' => '2020-02-13 00:48:19',
            ),
        ));
        
        
    }
}