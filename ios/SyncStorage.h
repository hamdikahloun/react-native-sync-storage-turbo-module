
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSyncStorageSpec.h"

@interface SyncStorage : NSObject <NativeSyncStorageSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SyncStorage : NSObject <RCTBridgeModule>
#endif

@end
