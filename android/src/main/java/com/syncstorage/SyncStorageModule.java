package com.syncstorage;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SyncStorageModule.NAME)
public class SyncStorageModule extends NativeSyncStorageSpec {
  public static final String NAME = "SyncStorage";
  private static final String MY_PREF = "com.syncstorage.PREFERENCE_FILE_KEY";
  SharedPreferences sharedPref;
  SharedPreferences.Editor editor;

  public SyncStorageModule(ReactApplicationContext reactContext) {
    super(reactContext);
    sharedPref = reactContext.getSharedPreferences(MY_PREF, Context.MODE_PRIVATE);
    editor = sharedPref.edit();
  }

  @Override
  public String getItem(String key) {
    return sharedPref.getString(key, null);
  }

  @Override
  public void setItem(String key, String value) {
    editor.putString(key, value).apply();
  }

  @Override
  public void removeItem(String key) {
    editor.remove(key).apply();
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }
}
