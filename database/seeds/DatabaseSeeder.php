<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_DataTypesTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_DataRowsTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_MenuItemsTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_MenusTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_PermissionRoleTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_PermissionsTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_SettingsTableSeeder::class);
        $this->call(ELU_2020_04_10_214648_TranslationsTableSeeder::class);
    }
}
