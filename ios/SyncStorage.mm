#import "SyncStorage.h"

@implementation SyncStorage
RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSyncStorageSpecJSI>(params);
}
#endif

NSUserDefaults *preferences = [NSUserDefaults standardUserDefaults];

- (NSString *)getItem:(NSString *)key {
    NSString * value = [preferences stringForKey:key];
    return value;
}

- (void)removeItem:(NSString *)key {
    [preferences removeObjectForKey:key];
    [preferences synchronize];
}

- (void)setItem:(NSString *)key value:(NSString *)value {
    [preferences setObject:value forKey:key];
    [preferences synchronize];
}

- (void)clear {
    [preferences removePersistentDomainForName:[[NSBundle mainBundle] bundleIdentifier]];
    [preferences synchronize];
}

- (NSArray<NSString *> *)getAllKeys {
    NSString *bundleIdentifier = [[NSBundle mainBundle] bundleIdentifier];
    NSDictionary *dict = [preferences persistentDomainForName:bundleIdentifier];
    NSArray *keys = [dict allKeys];
    return keys;
}



@end
